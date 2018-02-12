class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQtd = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );
        console.log(data);

        let negociacao = new Negociacao(
            data,
            this._inputQtd.value,
            this._inputValor.value
        );

        console.log(negociacao);
    };
}
