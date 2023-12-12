import sys
import json
from openai import OpenAI
from dotenv import load_dotenv
import os
from bardapi import Bard


def complete_json_from_bard(incomplete_json, prompt_message):
    load_dotenv()
    os.environ['_BARD_API_KEY']= os.getenv("_BARD_API_KEY")

    bard_prompt = f"{incomplete_json} {prompt_message}"

    bard_generated_response = Bard().get_answer(bard_prompt)['content']

    start_index = bard_generated_response.find('{')
    end_index = bard_generated_response.rfind('}')

    if start_index == -1:
        bard_generated_json = bard_generated_response
    elif end_index == -1:
        bard_generated_json = bard_generated_response
    else:
        bard_generated_json = bard_generated_response[start_index:end_index + 1]


def complete_json_from_gpt(incomplete_json, prompt_message):
    load_dotenv()
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

    client = OpenAI(
    api_key = OPENAI_API_KEY,
    )

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"{incomplete_json} {prompt_message}",
            }
        ],
        model="gpt-3.5-turbo",
    )
    gpt_generated_response = chat_completion.choices[0].message.content
    start_index = gpt_generated_response.find('{')
    end_index = gpt_generated_response.rfind('}')

    if start_index == -1:
        gpt_generated_json = gpt_generated_response
    elif end_index == -1:
        gpt_generated_json = gpt_generated_response
    else:
        gpt_generated_json = gpt_generated_response[start_index:end_index + 1]
        
    return gpt_generated_json


input_json = sys.stdin.read()
input_data = json.loads(input_json)

incomplete_json_string = input_data.get('incompleteJsonData', '')
incomplete_json_string = incomplete_json_string.replace('\r', '')
incomplete_json_string = json.dumps(incomplete_json_string)
incomplete_json_string = json.loads(incomplete_json_string)
incomplete_json = eval(incomplete_json_string)
prompt_message = input_data.get('promptMessage', {})

complete_json = complete_json_from_gpt(incomplete_json, prompt_message)
complete_json = complete_json.replace('\r', '')
complete_json = complete_json.replace('\n', '')

complete_string = json.dumps(complete_json)
print(complete_string)