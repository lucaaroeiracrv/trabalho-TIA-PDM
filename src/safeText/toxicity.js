import * as toxicity from "@tensorflow-models/toxicity";

// Definindo uma função assíncrona 'testeToxidade' que recebe um texto como entrada -> funcao assincrona:permite que outras operações ocorram enquanto espera por uma resposta, útil para tarefas que podem demorar.
const testeToxidade = async (text) => {
    // Definindo o limite de confiança para classificação de toxicidade
    const limite = 0.8;

    try {
        // Carregando o modelo de classificação de toxicidade com o "limite"(0,8) definido -> await: usada em funções assíncronas para pausar a execução até que uma operação assíncrona seja concluída
        const model = await toxicity.load(limite);
        
        // Classificando o texto fornecido usando o modelo carregado
        const results = await model.classify(text);

        results.forEach(result => {
            // Comparando as probabilidades de ser tóxico e não tóxico 
            result.results[0].match = result.results[0].probabilities[1] > result.results[0].probabilities[0];
        });

        // Retornando os resultados da classificação
        return results;
    } catch (error) {
        // Caso de algum erro
        console.error("Erro ao classificar o texto:", error);
        throw error;
    }
};


export default testeToxidade;

