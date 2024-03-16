# SPL3
This is a software reconstruction tool using LLMs (Large Language Models). It translate java source code to json for software system structure, then reconstrut structure using LLMs.
Our main functionalities are:
 * Github Repository to JSON Folder
 * Translate Java Code to JSON
 * Hiding Information From JSON
 * Complete the JSON using LLM

## Github Repository to JSON Folder
```python
import re
import json
import requests
import os
username = "rakib3004"
repository_name = "computer-science"
api_url = f"https://api.github.com/repos/{username}/{repository_name}/contents/"
access_token = "github-access-token"

def fetch_java_repository(api_url, destination_directory):
    response = requests.get(api_url, headers={"Authorization": f"token {access_token}"})
    if response.status_code == 200:
        contents = response.json()
        for item in contents:
            if item["type"] == "file":
                file_url = item["download_url"]
                file_name = item["name"]
                base_name, extension = os.path.splitext(file_name)
                if extension == ".java":
                  response = requests.get(file_url)
                  if response.status_code == 200:
                    content = response.text
                    json_content = java_to_json(content)
                    new_file_name = base_name + ".json"
                    new_file_path = os.path.join(destination_directory, new_file_name)
                    with open(new_file_path, "w") as new_file:
                        json.dump(json_content, new_file, indent=4)
            elif item["type"] == "dir":
                new_dir = os.path.join(destination_directory, item["name"])
                os.makedirs(new_dir, exist_ok=True)
                java_code_to_json_representation(item["url"], new_dir)

os.makedirs(f"/content/drive/MyDrive/folder_path/{repository_name}",exist_ok=True)
destination_directory = f"/content/drive/MyDrive/folder_path/{repository_name}"

fetch_java_repository(api_url, destination_directory)
```

## Translate Java Code to JSON
```python
import re
import json
import json
import javalang
import sys

def extract_associations(java_code, class_name):
    associations = []
    associations_pattern = r"(((\w+)\s+)?(\w+)\s*=\s*)?new\s+(\w+)\((.*)\);?"

    class_pattern = re.compile(fr'\b(?:public|private|protected|default)?\s+class\s+{class_name}\b(.*?)(?=\b(?:public|private|protected|default)?\s*class|\Z)', re.DOTALL)

    match = re.search(class_pattern, java_code)
    if match:
        class_code = match.group(1)
        associations_matches = re.findall(associations_pattern, class_code)

        for association_info in associations_matches:
          associated_class = association_info[-2]

          associations.append({
                        "relationship_type": "Association",
                        "with": associated_class,
                    })
    return associations


def extract_generalization(java_code, class_name):
    generalizations = []

    parent_class_pattern = fr"class\s+{class_name}\s+extends\s+(\w+)"


    parent_class_matches = re.findall(parent_class_pattern, java_code)

    for parent_class in parent_class_matches:
        generalizations.append({
            "relationship_type": "Generalization",
            "with": parent_class
        })

    return generalizations



def extract_realization(java_code, class_name):
    realizations = []

    interfaces_pattern = r"class\s+"+class_name+"\s+implements\s+([^{\n]+)"
    interfaces_matches = re.search(interfaces_pattern, java_code)

    if interfaces_matches:
        interfaces_list = interfaces_matches.group(1).strip()
        interfaces = [interface.strip() for interface in interfaces_list.split(',')]

        for interface in interfaces:
           realizations.append({
            "relationship_type": "Realization",
            "with": interface
        })


    interfaces_after_extends_pattern = r"class\s+"+class_name+"\s+extends\s+(\w+)\s+implements\s+([^{\n]+)"
    interfaces_matches_after_extends = re.search(interfaces_after_extends_pattern, java_code)

    if interfaces_matches_after_extends:
        interfaces_list = interfaces_matches_after_extends.group(2).strip()
        interfaces = [interface.strip() for interface in interfaces_list.split(',')]

        for interface in interfaces:
           realizations.append({
            "relationship_type": "Realization",
            "with": interface
        })

    return realizations


def extract_class_relationships(java_code, class_name):
    class_relationships = []
    associations = extract_associations(java_code, class_name)
    generalizations = extract_generalization(java_code, class_name)
    realizations = extract_realization(java_code, class_name)

    class_relationships = associations + generalizations +  realizations
    return class_relationships


def extract_method_calls(elements):
  calls = []
  if elements is None:
    return calls
  for element in elements:
    data_str = str(element)
    calls_in_method = re.findall(r'MethodInvocation\(arguments=.*?, member=(\w+)', data_str)
    calls.extend(calls_in_method)
    super_invocations = re.findall(r'SuperConstructorInvocation', data_str)
    if super_invocations:
      calls.append('super')

  calls = [call for call in calls if call not in ('print', 'println', 'printf')]

  return calls



def extract_method_details(method):
    method_info = {
        "name": method.name,
        "arguments": [{"type": param.type.name, "name": param.name} for param in method.parameters if param.name is not None],
         "calls": extract_method_calls(method.body)
    }
    return method_info


def extract_method_info(node):
    if isinstance(node, javalang.tree.MethodDeclaration):
        return extract_method_details(node)
    elif isinstance(node, javalang.tree.ConstructorDeclaration):
      return extract_method_details(node)
    return None

def extract_class_info(java_code, node):
    if isinstance(node, javalang.tree.ClassDeclaration):
      if 'abstract' in node.modifiers:
        return None
      class_name = node.name
      return {
            'name': class_name,
            'methods': [info for member in node.body if (info := extract_method_info(member)) is not None],
            'relationships': extract_class_relationships(java_code, class_name)
        }
    return None

def extract_abstract_class_info(java_code, node):
    if isinstance(node, javalang.tree.ClassDeclaration):
      if 'abstract' in node.modifiers:
        class_name = node.name
        methods =  [info for member in node.body if (info := extract_method_info(member)) is not None]
        relationships = extract_class_relationships(java_code, class_name)

        abstract_class_info = {
            'name': class_name,
            'methods': methods,
        }
        if relationships:
          abstract_class_info["relationships"] = relationships
        return abstract_class_info

    return None


def extract_interface_info(node):
    if isinstance(node, javalang.tree.InterfaceDeclaration):
      return {
            'name': node.name,
            'methods': [info for member in node.body if (info := extract_method_info(member)) is not None]
        }

def extract_enum_info(node):
  if isinstance(node, javalang.tree.EnumDeclaration):
        return {
            'name': node.name,
            'values': [value.name for value in node.body.constants]
        }



def extract_info(java_code):
  try:
    tree = javalang.parse.parse(java_code)
  except Exception as e:
    return [{
        "status": "error",
        "message" : "Java Syntax Error",
    }]

  class_info = [info for path, node in tree if (info := extract_class_info(java_code, node))]
  enum_info =  [info for path, node in tree if (info := extract_enum_info(node))]
  interface_info = [info for path, node in tree if (info := extract_interface_info(node))]
  abstract_class_info =  [info for path, node in tree if (info := extract_abstract_class_info(java_code, node))]
  return class_info , interface_info, abstract_class_info , enum_info


def extract_package_and_imports(java_code):
    package_info = []
    imports_info = []
    class_info = {}
    lines = java_code.split("\n")
    is_in_method = False
    package_name=""

    for line in lines:
        if line.strip().startswith("package "):
            package_name = line.split(" ")[1][:-1]
            package_info.append(package_name)
        elif line.strip().startswith("import "):
            import_name = line.split(" ")[1][:-1]
            imports_info.append(import_name)

    return package_info, imports_info


def java_to_json(java_code, java_file_name):
    try:
        package_info, imports_info = extract_package_and_imports(java_code)
        class_info , interface_info, abstract_class_info , enum_info = extract_info(java_code)
        result = {
        "package": package_info,
        "imports": imports_info,
        "classes": class_info,
    }

        if interface_info:
            result["interfaces"] = interface_info

        if abstract_class_info:
            result["abstract_classes"] = abstract_class_info

        if enum_info:
            result["enums"] = enum_info

        return result
    except Exception as e:
        error_response = {"filename": java_file_name,"message": f"error occur because {e}"}
        return error_response
```
## Hiding Information From JSON

## Complete the JSON using LLM
