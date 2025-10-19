const subway = {
  sales: 0,
  menus: [
    { name: "club", money: 7000, stock: 3 },
    { name: "blt", money: 7500, stock: 2 },
    { name: "eggmayo", money: 5000, stock: 2 },
    { name: "shirimp", money: 8000, stock: 0 },
  ],
  sell: function (num) {
    if (this.menus[num - 1].stock > 0) {
      this.sales = this.sales + this.menus[num - 1].money;
      console.log(`${this.menus[num - 1].name}이 판매 되었습니다.`);
      this.menus[num - 1].stock - 1;
    } else {
      console.log(`해당 재고는 품절입니당`);
    }
  },
  push: function (num) {
    if (this.menus[num - 1].stock == 0) {
      this.menus[num - 1].stock = this.menus[num - 1].stock + 1;
      console.log(
        `현 ${this.menus[num - 1].name}의 재고는 ${
          this.menus[num - 1].stock
        }입니다`
      );
    }
  },
};

subway.sell(3);
subway.sell(3);
subway.sell(3);
subway.sell(3);
subway.push(4);
