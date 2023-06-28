const sunMoonContainer = document.querySelector('.sun-moon-container')
document.querySelector('.theme-toggle-button').addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation',currentRotation + 180)
})
// this is an explanation of what is happening above
// we first imported the continaer using querySelector and using that on the event of mouse click, we are acquiring the property value of --rotation,
// which is initialised as 0 and then by using the style method and setProperty method,
// we updated the rotation property with the current rotation and adding 180 to it. 
// to get you an idea 
// 1st click {
//     currentRotation : 0,
//     --rotation : 0+180
// }
// 2nd click{
//     currentRotation : 180,
//     --rotation : 180+180
// }
// 3rd click{
//     currentRotation : 360,
//     --rotation : 540
// }..th click and so on..
//  this simple calculation ensures that our moon and sun icon always comes left to right transition order