class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQtd = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQtd.value,
            this._inputValor.value
        );

        console.log(negociacao);
    };
}

let negociacaoController = new NegociacaoController();
