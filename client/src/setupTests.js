const localStorageMock = {
  getItem: jest.fn(()=>null),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;


const fetchMock = (url) => {
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve(
                [
                    {
                        imgUrl: 'https://m.media-amazon.com/images/I/61RD48DCKQL.jpg',
                        productName: '200EBA',
                        price: 51.5,
                        quantity: 1,
                    }
                ]
            )
        })
    })
}

global.fetch = fetchMock;