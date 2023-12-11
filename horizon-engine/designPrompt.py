import os
import json
import math







def hiding_methods(temp_json):
  incomplete_json = temp_json
  for entry in incomplete_json.get("classes", []) + incomplete_json.get("abstract_classes", []) + incomplete_json.get("interfaces", []):
        methods =  entry.get("methods", [])
        num_methods = len(methods)

        indices_to_hide = [i for i in range(0, num_methods) if i % 3 != 0]

        for index in indices_to_hide:
            methods[index]["name"] = ""


  # print(json.dumps(incomplete_json, indent=2))
  return incomplete_json

def hiding_calls(temp_json):
  incomplete_json = temp_json
  for entry in incomplete_json.get("classes", []) + incomplete_json.get("abstract_classes", []):
        methods =  entry.get("methods", [])
        num_methods = len(methods)

        indices_to_hide = [i for i in range(0, num_methods) if i % 3 != 0]

        for index in indices_to_hide:
            methods[index]["calls"] = []

  print(json.dumps(incomplete_json, indent=2))
  return incomplete_json


def hiding_relationships(temp_json):
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



def hiding_attributes(original_complete_json):
  temp_json = original_complete_json
  # incomplete_json = hiding_methods(temp_json)
  incomplete_json = hiding_calls(temp_json)
  # incomplete_json = hiding_relationships(temp_json)
  return incomplete_json



