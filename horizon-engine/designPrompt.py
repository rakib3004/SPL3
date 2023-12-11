import json
import sys


def percentage_to_numerator_and_denominator(percentage):
    numerator = 0
    denominator = 0
    if(percentage=="one-by-three-remaining"):
        numerator = 1
        denominator = 3
    elif(percentage=="one-by-two-remaining"):
        numerator = 1
        denominator = 2
    elif(percentage=="two-by-five-remaining"):
        numerator = 2
        denominator = 5
    elif(percentage=="two-by-three-remaining"):
        numerator = 2
        denominator = 3
    elif(percentage=="three-by-five-remaining"):
        numerator = 3
        denominator = 5
    elif(percentage=="three-by-four-remaining"):
        numerator = 3
        denominator = 4
        
    return numerator, denominator


def get_hidden_indices(total_methods, percentage):
    numerator, denominator = percentage_to_numerator_and_denominator(percentage)
    indices_to_hide = []
    if(numerator==1):
        indices_to_hide = [i for i in range(0, total_methods) if i % denominator != 0]
    elif((denominator-numerator)==1):
      indices_to_hide = [i for i in range(0, total_methods) if i % denominator == 1]
    elif(numerator== 2 and denominator == 5):
        indices_to_hide = [i for i in range(0, total_methods) if i % denominator != 1 or i % denominator != 3]
    elif(numerator== 3 and denominator == 5):
        indices_to_hide = [i for i in range(0, total_methods) if i % denominator != 0 or i % denominator != 2 or i % denominator != 4] 

    return indices_to_hide
    

def hiding_methods(temp_json, percentage):
  incomplete_json = temp_json
  for entry in incomplete_json.get("classes", []) + incomplete_json.get("abstract_classes", []) + incomplete_json.get("interfaces", []):
        methods =  entry.get("methods", [])
        total_methods = len(methods)

        # indices_to_hide = [i for i in range(0, total_methods) if i % 3 != 0]
        indices_to_hide = get_hidden_indices(total_methods, percentage)
        for index in indices_to_hide:
            methods[index]["name"] = ""
  return incomplete_json

def hiding_calls(temp_json, percentage):
  incomplete_json = temp_json
  for entry in incomplete_json.get("classes", []) + incomplete_json.get("abstract_classes", []):
        methods =  entry.get("methods", [])
        total_methods = len(methods)

        indices_to_hide = get_hidden_indices(total_methods, percentage)

        for index in indices_to_hide:
            methods[index]["calls"] = []

  return incomplete_json


def hiding_relationships(temp_json, percentage):
  total_relationships = 0

  incomplete_json = temp_json
  for entry in incomplete_json.get("classes", []) + incomplete_json.get("abstract_classes", []):
        relationships = entry.get("relationships", [])
        total_relationships += len(relationships)

  relationship_index=0
  for entry in incomplete_json.get("classes", []) + incomplete_json.get("abstract_classes", []):
        relationships = entry.get("relationships", [])

        if(relationship_index%3!=0):
          relationships[0]["relationships"] = []
          relationship_index+=1

  # print(json.dumps(incomplete_json, indent=2))
  return incomplete_json


def hiding_attributes(original_complete_json, hiding_info):
  temp_json = original_complete_json
  option = hiding_info["selectedOption"]

  percentage = hiding_info["selectedPercentage"]
  if(option=='hiding-methods'):
      incomplete_json = hiding_methods(temp_json, percentage)
  elif(option=='hiding-calls'):
      incomplete_json = hiding_calls(temp_json, percentage)
  else:
      incomplete_json = hiding_relationships(temp_json, percentage)
      
  return incomplete_json





input_json = sys.stdin.read()
input_data = json.loads(input_json)

original_complete_json_string = input_data.get('actualJsonData', '')
original_complete_json_string = original_complete_json_string.replace('\r', '')

original_complete_json = json.dumps(original_complete_json_string)
original_complete_json = json.loads(original_complete_json)
original_complete_json = eval(original_complete_json)
hiding_info = input_data.get('hidingInfo', {})

incomplete_json = hiding_attributes(original_complete_json, hiding_info)
incomplete_string = json.dumps(incomplete_json, indent= 2)
print(incomplete_string)

# incomplete_string = json.dumps(hiding_info)
# print('error in code info not split ',incomplete_string)