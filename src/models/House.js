export class House {
    constructor(data) {
        this.id = data.id || data._id
        this.bedrooms = data.bedrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.bathrooms = data.bathrooms
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.createdId = new Date(data.createdAt)
        this.updatedId = new Date(data.updatedAt)

    }
}




// {
//     "_id": "645d60f381faf24223ae886b",
//     "bedrooms": 3,
//     "bathrooms": 2,
//     "levels": 2,
//     "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
//     "year": 2003,
//     "price": 230000,
//     "description": "Super sick house",
//     "creatorId": "63f7d6202d1cf882287f12e2",
//     "createdAt": "2023-05-11T21:41:07.979Z",
//     "updatedAt": "2023-05-11T21:41:07.979Z",
//     "__v": 0,
//     "creator": {
//       "_id": "63f7d6202d1cf882287f12e2",
//       "name": "Charles Francis Xavier",
//       "picture": "https://media.tumblr.com/73b6bbb5a253780cfa957f4afd8d9e86/tumblr_inline_mqe0j8cDgp1qz4rgp.gif",
//       "id": "63f7d6202d1cf882287f12e2"
//     },
//     "id": "645d60f381faf24223ae886b"
//   }