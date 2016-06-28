var data = {
    alpha: {
      title: 'Alpha Section',
      body: 'You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. They will try to close the door on you, just open it. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? We the best. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. The key is to drink coconut, fresh coconut, trust me. Find peace, life is like a water fall, you’ve gotta flow. How’s business? Boomin. They don’t want us to eat. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth.'
    },
    bravo: {
      title: 'Bravo Section',
      body: 'You smart, you loyal, you a genius. Learning is cool, but knowing is better, and I know the key to success. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. They don’t want us to eat. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. Another one. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Wraith talk. Cloth talk. Celebrate success right, the only way, apple. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started.'
    },
    charlie: {
      title: 'Charlie Section',
      body: 'Life is what you make it, so let’s make it. The key to more success is to have a lot of pillows. Bless up. They don’t want us to eat. Fan luv. To succeed you must believe. When you believe, you will succeed. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Look at the sunset, life is amazing, life is beautiful, life is what you make it.'
    },
    delta: {
      title: 'Delta Section',
      body: 'We the best. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. In life there will be road blocks but we will over come it. Celebrate success right, the only way, apple. Special cloth alert. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Learning is cool, but knowing is better, and I know the key to success. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast.'
    }
};

var anchors = document.querySelectorAll('a');

function changeContent(input) {

// console.log(data[input].title);
document.querySelector('#changes h2').textContent = data[input].title;
document.querySelector('#changes main').textContent = data[input].body;

}

window.addEventListener('hashchange', function (){
    var hashInput = location.hash.slice(1);
    changeContent(hashInput);
    console.log(hashInput);
});

window.location.hash = '#alpha';
changeContent('alpha');

function activeColor (evt) {
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].classList.remove('active');
  }
  evt.target.classList.add('active');
}

for (var i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', activeColor);
}
