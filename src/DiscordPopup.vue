<template>
  <div class="root">
    <div class="popup" :class="{hidden: !open}">
      <div class="popup-inner">
        <img class="discord-banner" src="@/assets/discord-banner.png">
        <img class="logo" src="@/assets/logo.png">
        <p class="info">Our Discord is our main focus when communicating with our members.</p>
        <p class="info">Make sure you're in here to keep up with our latest events and discussions!</p>
        <button class="button uom-font" @click="goToInvite">Join Discord</button>
      </div>
    </div>
    <div class="notifications">
      <transition name="notification-trans">
        <div v-if="notification" class="notification">
          <img src="@/assets/logo.png" class="avatar">
          <div class="content">
            <p>Need help? Join our discord!</p>
          </div>
        </div>
      </transition>
    </div>

    <button @click="toggle()" class="toggle-button" :class="{show: !open}">
      <div class="icons">
        <svg viewBox="0 0 49 50" class="close" :class="{hidden: !open}">
          <path d="M49 45.71l-3.55 3.571-20.6-20.713L3.54 49.997l-3.55-3.572L21.3 24.997-.01 3.57 3.54-.002l21.31 21.427L45.45.713 49 4.284 28.4 24.997" fill="#fff"/>
        </svg>
        <svg viewBox="-357 161 245 240" class="open" :class="{hidden: open}">
          <path fill="#fff" d="M-145.3 217.1c-29.2-21.9-57-21.3-57-21.3l-2.8 3.2c34.5 10.5 50.5 25.8 50.5 25.8-21.1-11.6-41.8-17.2-61-19.5-14.6-1.6-28.6-1.2-41 .4-1.2 0-2.2.2-3.4.4-7.1.6-24.3 3.2-46 12.8-7.5 3.4-12 5.9-12 5.9s16.8-16 53.3-26.6l-2-2.4s-27.8-.6-57 21.3c0 0-29.2 52.9-29.2 118.2 0 0 17 29.4 61.8 30.8 0 0 7.5-9.1 13.6-16.8-25.8-7.7-35.5-23.9-35.5-23.9s2 1.4 5.7 3.4c.2.2.4.4.8.6.6.4 1.2.6 1.8 1 5.1 2.8 10.1 5.1 14.8 6.9 8.3 3.2 18.2 6.5 29.8 8.7 15.2 2.8 33.1 3.9 52.5.2 9.5-1.6 19.3-4.5 29.4-8.7 7.1-2.6 15-6.5 23.3-12 0 0-10.1 16.6-36.7 24.1 6.1 7.7 13.4 16.4 13.4 16.4 44.8-1.4 62-30.8 62-30.8.1-65.1-29.1-118.1-29.1-118.1zm-127.1 99.4c-11.4 0-20.7-10.1-20.7-22.5s9.1-22.5 20.7-22.5 20.9 10.1 20.7 22.5c0 12.3-9.2 22.5-20.7 22.5zm74 0c-11.4 0-20.7-10.1-20.7-22.5s9.1-22.5 20.7-22.5 20.7 10.1 20.7 22.5c0 12.3-9.2 22.5-20.7 22.5z"/>
        </svg>
      </div>
      <span v-show="numberPopup" class="number-popup">1</span>
    </button>
  </div>
</template>

<script>
import { EventBus } from './event-bus.js';

export default {
  data () {
    return {
      open: false,
      hasOpened: false,
      invite: process.env.VUE_APP_DISCORD_INVITE,
      notification: false,
      numberPopup: false
    };
  },
  created () {
    EventBus.$on('toggle-discord', () => {
      this.toggle();
    });

    // If this is user's first visit (or we're in development) show a help notification
    if (process.env.NODE_ENV === 'development' || !this.$cookies.isKey('not-first-visit')) {
      this.$cookies.set('not-first-visit', true);
      window.setTimeout(() => {
        if (!this.hasOpened) {
          this.notification = true;
          this.numberPopup = true;
        }
      }, 5000);
      window.setTimeout(() => {
        this.notification = false;
      }, 15000);
    }
  },
  methods: {
    toggle () {
      if (!this.open) this.numberPopup = false; this.notification = false; this.hasOpened = true;
      this.open = !this.open;
    },
    goToInvite () {
      window.open(this.invite, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
.root {
  transition: opacity 0.2s ease 0s;
  opacity: 1;
  height: 100%;
  width: 100%;

  * {
      box-sizing: border-box;
  }
}
.toggle-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2147483000;
  cursor: pointer;
  outline: currentcolor none medium;
  height: 56px;
  border-radius: 56px;
  border: medium none;
  padding: 0px;
  transition: box-shadow 0.2s ease 0s, background-color 0.3s ease 0s, opacity 0.2s ease 0s, transform 0.2s ease 0s;
  animation: 0.3s ease 0s 1 normal none running button-trans;
  background-color: transparent;

  @media only screen and (max-width: 1000px) {
    border-bottom-right-radius: 50%;
    right: 2px;
    bottom: 72px;
  }

  &.show {
    box-shadow: rgba(106, 44, 145, 0.3) 0px 3px 5px -1px, rgba(106, 44, 145, 0.14) 0px 6px 10px 0px, rgba(106, 44, 145, 0.12) 0px 1px 18px 0px;
    background-color: $dark;
  }

  .icons {
    width: 56px;
    height: 100%;
    border-radius: inherit;

    > * {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      transition: transform 0.16s linear 0s, opacity 0.2s ease 0s;
    }

    .close {
      padding: 19px;
      opacity: 0.6;
      border-radius: inherit;

      &.hidden {
        opacity: 0 !important;
        transform: rotate(30deg) scale(0);
      }
    }

    .open {
      padding: 12px;
      border-radius: inherit;

      &.hidden {
        opacity: 0;
        transform: rotate(30deg) scale(0);
      }
    }
  }

  .number-popup {
    position: absolute;
    top: 0px;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 50%;
    text-align: center;
    -moz-user-select: none;
    font-family: sans-serif;
    font-size: 12px;
    background: rgb(255, 42, 42) none repeat scroll 0% 0%;
    color: rgb(255, 255, 255);
    box-shadow: rgba(255, 42, 42, 0.38) 0px 3px 5px -1px, rgba(255, 42, 42, 0.38) 0px 4px 9px 0px, rgba(255, 42, 42, 0.22) 0px 1px 12px 0px;
    right: 0px;
  }
}

@keyframes button-trans {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  100% {
      transform: initial;
      opacity: 1;
  }
}

.popup {
  position: fixed;

  @media only screen and (min-width: 501px) {
    width: 400px;
    max-height: 550px;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    inset: 0px;
  }

  @media only screen and (max-width: 1000px) {
    bottom: 72px;
    right: 2px;
  }

  bottom: 20px;
  right: 20px;
  z-index: 2147482999;
  transition: opacity 0.4s ease 0s, transform 0.3s cubic-bezier(0.24, 0.6, 0.35, 0.96) 0s;
  height: calc(100% - 40px);
  transform-origin: 100% 100% 0px;

  &.hidden {
    opacity: 0;
    pointer-events: none;
    transform: scale(0.1);

    > div {
      border-radius: 200px !important;
    }
  }

  .popup-inner {
    height: 100%;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 40px;
    transition: border-radius 0.2s ease 0s;
    border-radius: 17px !important;

    display: inline-block;
    overflow: hidden;
    background-color: rgb(54, 57, 62);
    border-radius: 7px;
    vertical-align: top;

    padding: 20px;

    > img {
      display: block;
      margin: auto;
    }

    .discord-banner {
      margin-top: 10px;
      margin-bottom: 20px;

      @media only screen and (min-width: 501px) {
        width: 40%;
      }

      @media only screen and (max-width: 500px) {
        width: 65%;
      }
    }

    .logo {
      width: 65%;
      margin-bottom: 20px;
    }

    .info {
      color: white;
      font-size: 1.3em;
    }

    .button {
      color: #fff;
      background-color: #7289da;

      line-height: 24px;

      width: 80%;
      height: 44px;
      min-width: 130px;
      min-height: 44px;

      -webkit-transition: background-color .17s ease,color .17s ease;
      transition: background-color .17s ease,color .17s ease;

      box-sizing: border-box;
      border: none;
      border-radius: 3px;
      font-size: 20px;
      font-weight: 500;
      line-height: 16px;
      padding: 2px 16px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      outline: 0;
      cursor: pointer;

      &:hover {
        background-color: #677bc4;
      }
    }
  }
}

.notifications {
  display: flex;
  pointer-events: none;
  flex-direction: column-reverse;
  position: fixed;
  z-index: 2147482999;
  padding: 7px 0px 20px;
  width: 300px;
  max-height: calc(70% - 100px);
  right: 20px;
  bottom: 76px;

  @media only screen and (max-width: 1000px) {
    bottom: 120px;
  }

  .notification-trans-enter-active, .notification-trans-leave-active {
    transition: all 0.5s cubic-bezier(0, 0.8, 0.25, 1.18) 0s;
  }
  .notification-trans-enter, .notification-trans-leave-to {
    pointer-events: none;
    opacity: 0;
    transform: translateX(20px);
  }

  .notification {
    padding-bottom: 6px;
    overflow: auto;
    flex-shrink: 0;

    .avatar {
      width: 35px;
      float: right;
      border-radius: 100%;
      cursor: pointer;
    }

    .content {
      padding: 10px 16px;
      float: right;
      max-width: calc(100% - 100px);
      transform: translate3d(0px, 0px, 0px);
      background-color: rgb(54, 57, 62);
      color: rgba(255, 255, 255, 0.7);
      overflow-wrap: break-word;
      word-break: break-word;
      line-height: 18px;
      font-size: 15px;
      white-space: pre-wrap;
      box-shadow: rgba(35, 47, 53, 0.5) 0px 2px 8px 0px;
      border-radius: 6px 0px 6px 6px;
      font-family: "Roboto", sans-serif;
      margin-right: 13px;

      text-align: left;

      > p {
        margin: 0;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0px;
        border-style: solid;
        border-color: rgb(54, 57, 62) transparent;
        display: block;
        width: 0px;
        right: -10px;
        border-width: 10px 10px 0px 0px;
      }
    }
  }
}
</style>
