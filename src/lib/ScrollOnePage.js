/**
 * Created by renatoalmeida on 20/07/17.
 */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
export default function OnPageScroll () {
  'use strict'
  
  //
  // VARIABLES
  this.configure = function (itemContainer, withMouse, scrollIndicator, callback) {
    this.callback = (callback && typeof callback === 'function') ? callback : null
    this.scrollContainer = document.querySelector(itemContainer)
    this.pagesContainer = document.querySelector('.sections')
    this.sectionCount = document.querySelectorAll('.page-item').length
    this.scrollIndicatorContainer = document.querySelector(scrollIndicator)
    this.currentSection = 0
    this.maxHeight = this.scrollContainer.offsetHeight
    this.iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
    this.isScrolling = false
    this.keyCodes = {
      up: 38,
      down: 40
    }
    if (!this.scrollContainer || !this.pagesContainer) {
      this.configure(itemContainer, scrollIndicator)
      return
    }
    
    this.setStyles()
    if (withMouse) {
      this.addScrollListeners()
    }
    this.setScrollIndicators()
    this.gotoSection(0)
  }
  
  /**
   | ----------------------------------------------
   * MOVE ONE ITEM
   | ----------------------------------------------
   **/
  this.move = function () {
    if (this.iOS) {
    } else {
      this.pagesContainer.style.top = '-' + (this.currentSection * this.maxHeight) + 'px'
    }
    setTimeout(function () {
      this.setActiveStatus()
      if (this.callback) {
        this.callback(this.currentSection)
      }
    }.bind(this), 500)
  }
  
  /**
   | ----------------------------------------------
   * SET ACTIVE CLASS
   | ----------------------------------------------
   **/
  this.setActiveStatus = function () {
    var pages = this.pagesContainer.querySelectorAll('.page-item')
    pages.forEach(function (item, index) {
      item.className = 'page-item'
      if (index === this.currentSection) {
        item.className = 'page-item active'
      }
    }.bind(this))
    if (this.scrollIndicatorContainer) {
      var lis = this.scrollIndicatorContainer.querySelectorAll('li')
      lis.forEach(function (item, index) {
        item.className = ''
        if (index === this.currentSection) {
          item.className = 'active'
        }
      }.bind(this))
    }
  }
  
  /**
   | ----------------------------------------------
   * GOTO NEXT PAGE
   | ----------------------------------------------
   **/
  this.moveup = function () {
    if (this.currentSection <= 0) {
      return
    }
    this.currentSection--
    this.move()
  }
  
  /**
   | ----------------------------------------------
   * GOTO PREV PAGE
   | ----------------------------------------------
   **/
  this.movedown = function () {
    if (this.currentSection >= this.sectionCount - 1) {
      return
    }
    this.currentSection++
    this.move()
  }
  
  /**
   | ----------------------------------------------
   * GOTO ESPECIFIC SECTION
   | ----------------------------------------------
   **/
  this.gotoSection = function (section) {
    this.currentSection = section
    this.move()
  }
  
  /**
   * ADD INTERACTION
   * @param element
   * @param sectionNumber
   */
  this.addEvent = function (element, sectionNumber) {
    var el = document.querySelector(element)
    if (!el) {
      return
    }
    el.addEventListener('click', function () {
      this.currentSection = sectionNumber
      this.move()
    }.bind(this))
  }
  /**
   | ----------------------------------------------
   * SET CUSTOM STYLES
   | ----------------------------------------------
   **/
  this.setStyles = function () {
    this.pagesContainer = this.scrollContainer.querySelector('.sections')
    this.pagesContainer.style.display = 'block'
    this.pagesContainer.style.height = Number((this.maxHeight * this.sectionCount)) + 'px'
    var pages = this.pagesContainer.querySelectorAll('.page-item')
    for (var i = 0; i < pages.length; i++) {
      var item = pages[i]
      item.style.height = this.maxHeight + 'px'
      item.style.overflow = 'hidden'
    }
  }
  
  /**
   | ----------------------------------------------
   * SET SCROLL INTERVAL
   | ----------------------------------------------
   **/
  this.setScrollInterval = function (ms) {
    setTimeout(function () {
      this.isScrolling = false
    }.bind(this), ms)
  }
  
  /**
   | ----------------------------------------------
   * WHEN KEY PRESSED
   | ----------------------------------------------
   **/
  this.onKeyDown = function (event) {
    if (event.keyCode === this.keyCodes.up) {
      this.moveup()
    } else if (event.keyCode === this.keyCodes.down) {
      this.movedown()
    }
  }
  
  /**
   | ----------------------------------------------
   * ADD LISTNERS OF SCROLL
   | ----------------------------------------------
   **/
  this.addScrollListeners = function () {
    window.addEventListener('DOMMouseScroll', this.onMouseWhell.bind(this), false)
    window.onmousewheel = document.onmousewheel = this.onMouseWhell.bind(this)
    window.addEventListener('keydown', this.onKeyDown.bind(this))
  }
  
  /**
   | ----------------------------------------------
   * REMOVE SCROLL LISTENERS
   | ----------------------------------------------
   **/
  this.removeScrollListeners = function () {
    window.removeEventListener('DOMMouseScroll', this.onMouseWhell.bind(this))
    window.onmousewheel = document.onmousewheel = null
    window.removeEventListener('keydown', this.onKeyDown.bind(this))
  }
  
  /**
   * WHEN MOUSE WHELL
   * @param event
   */
  this.onMouseWhell = function (event) {
    var delta = 0
    var currentEvent = event || window.event
    if (currentEvent.wheelDelta) {
      delta = (window.opera ? -1 : 1) * currentEvent.wheelDelta / 128
    } else if (currentEvent.detail) {
      delta = -currentEvent.detail / 3
    }
    if (delta) {
      this.handleDelta(delta)
    }
  }
  
  /**
   * MANIPULATE DELTA
   * @param delta
   */
  this.handleDelta = function (delta) {
    if (this.isScrolling) {
      return
    }
    if (delta > 0) {
      this.isScrolling = true
      this.moveup()
      this.setScrollInterval(1500)
    } else if (delta <= 0) {
      this.isScrolling = true
      this.movedown()
      this.setScrollInterval(1500)
    }
  }
  
  /**
   * SCROLL INDICATORS
   */
  this.setScrollIndicators = function () {
    if (!this.scrollIndicatorContainer) {
      return
    }
    this.scrollIndicatorContainer.innerHTML = ''
    for (var i = 0; i < this.sectionCount; i++) {
      var el = document.createElement('li')
      el.setAttribute(this.scrollIndicatorContainer.attributes[0].name, '')
      el.setAttribute('page-index', i)
      this.scrollIndicatorContainer.appendChild(el)
    }
    var self = this
    this.scrollIndicatorContainer.addEventListener('click', function (event) {
      var currentEvent = event || window.event
      if (currentEvent.target.tagName === 'LI') {
        var index = Number(currentEvent.target.getAttribute('page-index'))
        self.gotoSection(index)
      }
    })
  }
  
  /**
   | ----------------------------------------------
   * START PROCESS
   | ----------------------------------------------
   **/
  this.start = function (itemContainer, scrollIndicator, withMouse, callback) {
    setTimeout(function () {
      this.configure(itemContainer, withMouse, scrollIndicator, callback)
    }.bind(this), 500)
  }
  
  return this
}
