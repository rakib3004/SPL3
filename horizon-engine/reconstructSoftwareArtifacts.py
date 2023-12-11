import os
import json
import openai
import Levenshtein
from openai import OpenAI
import math


client = OpenAI(
api_key = 'token---of--access',
)

def levenshtein_distance(filename, gpt_completed_json, original_complete_json):
    print(gpt_completed_json)
    levenshtein_distance = Levenshtein.distance(
    str(gpt_completed_json), str(original_complete_json)
    )

    print(filename, levenshtein_distance)



def complete_json_from_gpt(filename, original_complete_json, incomplete_json):
    prompt = "There are some method's calls are missing, fill up them and complete the JSON file"

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"{incomplete_json} {prompt}",
            }
        ],
        model="gpt-3.5-turbo",
    )
    gpt_completed_json = chat_completion.choices[0].message.content
    levenshtein_distance(filename, gpt_completed_json, original_complete_json)