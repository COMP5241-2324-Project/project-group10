import google.generativeai as genai

genai.configure(transport='grpc')

my_finetuned_model_name = "generate_report_llm"

dataset = []

dataset.append({'input': '', # input the student information here
                 'output': ''}) # output your report here

operation = genai.create_tuned_model(
    source_model= 'models/gemini-1.0-pro-001',
    
    training_data = dataset,
    
    id = my_finetuned_model_name,
    
    epoch_count = 10,
    
    batch_size=4,
    
    learning_rate=0.001,
)

model = genai.get_tuned_model(f'tunedModels/{my_finetuned_model_name}')
model.state
model = genai.GenerativeModel(model_name=f'tunedModels/{my_finetuned_model_name}')

