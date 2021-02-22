import { makeObservable, observable } from "mobx";
import links from "../data/links";

export type TLink = 'dashboard' | 'shopping' | 'customer';

const currentHash = window.location.hash.slice(1);
const activeMenuItem = links.find(item => item === currentHash);


export class RouterStoreImpl {
  activeMenuLink: TLink = activeMenuItem ? activeMenuItem : 'dashboard';

  constructor() {
    makeObservable(this, {
      activeMenuLink: observable,
    });
  };

  navigateTo(link: TLink) {
    this.activeMenuLink = link;
  }
};

export const RouterStore = new RouterStoreImpl();
