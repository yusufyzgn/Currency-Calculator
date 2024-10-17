
class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
    }

    async exchange (amount,firstCurrency,SecondCurreny){
        const response = await fetch(` ${this.url}${firstCurrency}`)
        const result = await response.json();
        const exchangedResult = amount*result.data[SecondCurreny];
        return exchangedResult

    }

}