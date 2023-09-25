const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});


document.getElementById('inputField').addEventListener('input', function() {
  const input = this.value.trim();
  const topicList = document.getElementById('topicList');

  if (input === 'run-topic' || input === 'Run-Topic' || input === 'RUN-TOPIC' || input === 'run topic') {
      alert('Liberado')
      document.getElementById("acerto").innerHTML = "Correto!"
      topicList.style.display = 'block';
  } else {
      document.getElementById("erro").innerHTML = "Ops! ERRO! Verifique se as letras estão posicionadas corretamente;"
      topicList.style.display = 'none';
  }
});

function showInfo(infoId) {
  const infoElements = document.querySelectorAll('.info');
  infoElements.forEach(function(infoElement) {
      infoElement.style.display = 'none';
  });

  const selectedInfo = document.getElementById(infoId);
  if (selectedInfo) {
      selectedInfo.style.display = 'block';
  }
}