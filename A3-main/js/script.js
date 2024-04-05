const hoverWord = document.querySelector('.lecture');
    const body = document.querySelector('body');

    hoverWord.addEventListener('mouseenter', () => {
      body.style.backgroundColor = 'rgb(3, 5, 4)';
    });

    hoverWord.addEventListener('mouseleave', () => {
      body.style.backgroundColor = 'rgb(245, 247, 248)';
    });

//     function showEvent() {
//       var event = document.getElementById("anther_kiley");
//       event.style.display = "grid";
//     }
  
//     // 隐藏事件内容
//     function hideEvent() {
//       var event = document.getElementById("anther_kiley");
//       event.style.display = "none";
//     }


// // 更改背景图片
// function changeBackground(imageUrl) {
//   var speakers = document.getElementById("speakers");
//   speakers.style.backgroundImage = "url('" + imageUrl + "')";
//   speakers.style.backgroundSize = "100% auto"; // 设置背景图片大小
// }

// // 重置背景图片
// function resetBackground() {
//   var speakers = document.getElementById("speakers");
//   speakers.style.backgroundImage = "url('')";
//   speakers.style.backgroundSize = "cover"; // 重置为 cover 或其他适合的值
// }

$('#anther').hover(
  function() {
    $("#anther_cover").addClass("hoveredOn");
  },
);

$("#fix2").click(function(event) {
  event.stopPropagation(); // 阻止点击事件冒泡
  $("#anther_cover").removeClass("hoveredOn");
});



$("#kuan").hover(function() {
  
  $("#kuan_cover").addClass("hoveredOn")
})

$("#kuan").hover(function() {
  $("#kuan_cover").addClass("hoveredOn");
});

$("#fix2").click(function() {
  $("#kuan_cover").removeClass("hoveredOn");
});

$("#roon").hover(function() {
  
  $("#roon_cover").addClass("hoveredOn")
})

$("#roon").hover(function() {
  $("#roon_cover").addClass("hoveredOn");
});

$("#fix2").click(function() {
  $("#roon_cover").removeClass("hoveredOn");
});

$("#seba").hover(function() {
  
  $("#seba_cover").addClass("hoveredOn")
})

$("#seba").hover(function() {
  $("#seba").addClass("hoveredOn");
});

$("#fix2").click(function() {
  $("#seba_cover").removeClass("hoveredOn");
});

    

  
  // 添加hover效果的事件监听器
$('#anther').hover(
  function() {
    $("#anther_cover").addClass("hoveredOn");
  },
);

// 监听窗口大小的变化
$(window).resize(function() {
  if ($(window).width() <= 968) { // 在小于等于768px的屏幕宽度下
    $('#anther').off('mouseenter mouseleave'); // 移除hover效果的事件监听器
  } else {
    // 如果大于768px的屏幕宽度，则重新添加hover效果的事件监听器
    $('#anther').hover(
      function() {
        $("#anther_cover").addClass("hoveredOn");
      },
    );
  }
});
