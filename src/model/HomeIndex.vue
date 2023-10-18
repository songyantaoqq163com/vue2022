<template>
    <div class="drag-outer"
         ref="dragWrap"
         :style="'width:'+imgWidth"
         @mouseenter="isHover = true"
         @mouseleave="isHover = isMousedown = false"
         @mousemove="dragMousemove">
      <div class="drag-inner"
           ref="dragElement"
           @mousedown="dragMousedown"
           @mouseup.stop="isMousedown = false">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "index",
      props: {
        imgWidth: {
          type:String,
          default () {
            return '400px'
          }
        },
        scaleZoom: {
          type: Object,
          default () {
            return {
              max: 5,
              min: 0.2
            }
          }
        }
      },
      data() {
        return {
          isMousedown: false,
          isHover: false,
          moveStart: {},
          translate: {x: 0, y: 0},
          scale: 1
        }
      },
      mounted() {
        window.addEventListener('mousewheel',this.handleScroll,false)
      },
      methods: {
        handleScroll(e) {
          if (this.isHover) {
            let speed = e.wheelDelta / 120
            if (e.wheelDelta > 0 && this.scale < this.scaleZoom.max) {
              this.scale += 0.2 * speed
              this.$refs.dragElement.style.transform = `scale(${this.scale}) translate(${this.translate.x}px, ${this.translate.y}px)`
            } else if (e.wheelDelta < 0 && this.scale > this.scaleZoom.min) {
              this.scale += 0.2 * speed
              this.$refs.dragElement.style.transform = `scale(${this.scale}) translate(${this.translate.x}px, ${this.translate.y}px)`
            }
          }
        },
        dragMousedown() {
          this.moveStart.x = event.clientX
          this.moveStart.y = event.clientY
          this.isMousedown = true
        },
        dragMousemove() {
          if (this.isMousedown) {
            this.translate.x += (event.clientX - this.moveStart.x) / this.scale
            this.translate.y += (event.clientY - this.moveStart.y) / this.scale
            this.$refs.dragElement.style.transform = `scale(${this.scale}) translate(${this.translate.x}px, ${this.translate.y}px)`
            this.moveStart.x = event.clientX
            this.moveStart.y = event.clientY
          }
        }
      }
    }
  </script>
  
  <style lang="scss" scoped>
    .drag-outer {
      overflow: hidden;
      height:500px; float: left;
      display: flex;
      background-color:#fff;
      justify-content: center;
      align-items: center;
      .drag-inner {
        transform-origin: center center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: move;
        user-select: none;
        width:100%;
        height:100%;
        >* {
          -webkit-user-drag: none;
          user-drag: none;
        }
        img{object-fit:contain; width:100%; height:100%}
      }
    }
  </style>
  
  