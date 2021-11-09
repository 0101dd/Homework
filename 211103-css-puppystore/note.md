### ==標籤列(dropdown menu)==
**Q1: 碰到category後顯示cat、dog、fish等隱藏物件**
&emsp;&emsp;Q1-1: 滑鼠移到隱藏物件的範圍時，也會顯示隱藏物件
&emsp;&emsp;<font color=darkred> :hover後的選擇器要有「+」，目標的東西hover之後讓的選擇器作用。</font>
&emsp;&emsp;Q1-2: 滑鼠碰到category會顯示隱藏物件，但是一移開就會消失
&emsp;&emsp;<font color=darkred> hover到顯示的隱藏選單，再讓他顯示</font>
### ==5個圓圈的動畫==
**Q2：在偽元素before標籤下的動畫能夠執行，改成hover後卻不能**
&emsp;&emsp;<font color=darkred>選擇器的寫法</font>
```css
.circle:hover::before {
  animation: circleRotate 10s linear infinite;
}
```


### 總結
1. 選擇器不熟悉
   1-1. hover 和 「+」「>」「~」等選擇器
2.  