import sys
import json
from openai import OpenAI


client = OpenAI(
api_key = 'token---of--access',
)


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


input_json = sys.stdin.read()
input_data = json.loads(input_json)

original_complete_json_string = input_data.get('incompleteJsonData', '')
original_complete_json_string = original_complete_json_string.replace('\r', '')

original_complete_json = json.dumps(original_complete_json_string)
original_complete_json = json.loads(original_complete_json)
original_complete_json = eval(original_complete_json)
hiding_info = input_data.get('prompt', {})

incomplete_string = json.dumps(incomplete_json, indent= 2)
print(incomplete_string)