// wrong way

type HexColor = `#${string}`;
const color: HexColor = "#FF5733"; // Correct

type RGBColor = `rgb(${number}, ${number}, ${number})`;
const wrongColor: RGBColor = "rgb(255, 87, 51)"; 

type Email = `${string}@${string}.${string}`;

const email: Email = "test@gmail.com"

function sendEmail(to: Email, subject: string, body: string) {
  console.log(`Sending email to ${to} with subject "${subject}"`);
}

type UnknownEmail = {kind: "unknown"}

type User = {
  name: string;
  contact: Email | UnknownEmail;
}

function getEmail(user: User): Email | null {
  if (typeof user.contact === "string") {
    return user.contact;
  }
  return null;
}

const user: User = {
  name: "Alice",
  contact: {kind: "unknown"}
}

interface Config {
  retries: number;
  verbose: boolean;
}

function makeConfig(partial: Partial<Config>): Config {
  return { retries: 3, verbose: false, ...partial };
}

const config = makeConfig({verbose: false})
