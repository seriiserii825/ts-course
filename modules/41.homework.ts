export default function homework41() {
  type TAnimalType = "cat" | "dog" | "bird";

  type TRequest = {
    animal: TAnimalType;
    breed: string;
    sterilized?: string;
  };

  type TResponseAvailable = {
    status: "available";
    data: {
      animal: TAnimalType;
      breed: string;
      sterilized?: string;
      location: string;
      age?: number;
    };
  };

  type TResponseNotAvailable = {
    status: "not available";
    data: {
      message: string;
      nextUpdateIn: Date;
    };
  };

  type TResponse = TResponseAvailable | TResponseNotAvailable;

  const request: TRequest = {
    animal: "cat",
    breed: "siamese",
    sterilized: "yes",
  };

  const response: TResponseAvailable = {
    status: "available",
    data: {
      animal: "cat",
      breed: "siamese",
      sterilized: "yes",
      location: "New York",
      age: 2,
    },
  };

  const responseNotAvailable: TResponseNotAvailable = {
    status: "not available",
    data: {
      message: "Sorry, no animals of this breed are available at the moment.",
      nextUpdateIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // через неделю
    },
  };

  function checkAnimalData(animal: TResponse) {
    if (animal.status === "available") {
      return animal.data;
    } else {
      return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
    }
  }
  
  console.log(checkAnimalData(responseNotAvailable));
}
