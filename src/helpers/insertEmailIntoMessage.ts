function insertEmailIntoMessage(firstPart:string, email:string, secondPart:string) {
  return `${firstPart}${email}${secondPart}`;
}

export default insertEmailIntoMessage;
