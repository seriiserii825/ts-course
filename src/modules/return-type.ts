export default {}

function getUser(){
  return {
    id: 2,
    name: "Johnny"
  }
}

type TUser = ReturnType<typeof getUser>

const user: TUser = {
  id: 4,
  name: 'Abram'
}
