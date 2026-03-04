function square(n) {
  return n * n;
}

const squareArrow = n =>  n * n; //1 tham so thi khong can () ow bien


const  greetArrow1 = (name, age) => `Xin chào ${name}, bạn ${age} tuổi`;
  

const greetArrow = (name, age) => {
    return "Xin chào " + name + ", bạn " + age + " tuổi";
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const isEvenArrow = (number) => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }   
}

const isEvenArrow2 = number => number % 2 === 0; //1 tham so thi khong cần () ow biến, nếu có return thì không cần {} và return