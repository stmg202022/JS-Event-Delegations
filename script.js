const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// grandParent.addEventListener(
//   "click",
//   (event) => {
//     // console.log(event)
//     // console.log(event.currentTarget.id);
//     // console.log(event.target.id);
//   }
//   //   ,
//   //   {
//   //     capture: true,
//   //   }
// );

// parent.addEventListener(
//   "click",
//   (event) => {
//     //   console.log(event);
//     // console.log(event.currentTarget.id);
//     // console.log(event.target.id);
//   }
//   //   ,
//   //   {
//   //     capture: true,
//   //   }
// );

// child.addEventListener(
//   "click",
//   (event) => {
//     //   console.log(event);
//     // console.log(event.currentTarget.id);
//     //   console.log(event.target.id);
//   }
//   //   ,

//   //   {
//   //     capture: true,
//   //   }
// );

// Note: currentTarget cause bubbling but target donot cause bubbling
//capture is work on currentTarget ,byDefault it is false , and
//bubbling starts from captureing target  end point/last seted is final div(grandPagent)

// =================================================================================================
// =================================================================================================

const func = (event) => {
  console.log(event.target.id);
  //   console.log(event.target.tagName);
};

grandParent.addEventListener("click", func);
parent.addEventListener("click", func);
child.addEventListener("click", func);
