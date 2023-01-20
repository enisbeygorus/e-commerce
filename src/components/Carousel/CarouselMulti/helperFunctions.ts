class CarousalMulti {
  carousalWrapperWidth: number;
  numberOfItems: number;
  gapBetween: number;
  numberOfCartsShow: number;
  cartWidth: number;
  numberOfPxToMove: number;
  numberOfClonesToAdd: number;
  initialLandingPosition: number;
  landingPosition: number;
  maxLandingPosition: number;
  minLandingPosition: number;
  isTransformationAllowed: boolean;

  constructor(data: Partial<CarousalMulti>) {
    Object.assign(this, data);
  }

  init({
    numberOfItems,
    gapBetween,
    numberOfCartsShow,
    carousalWrapperWidth,
  }: Pick<
    CarousalMulti,
    | "numberOfItems"
    | "gapBetween"
    | "numberOfCartsShow"
    | "carousalWrapperWidth"
  >) {
    this.numberOfItems = numberOfItems;
    this.gapBetween = gapBetween;
    this.numberOfCartsShow = numberOfCartsShow;
    this.carousalWrapperWidth = carousalWrapperWidth;

    this.cartWidth =
      (carousalWrapperWidth - (numberOfCartsShow - 1) * gapBetween) /
      numberOfCartsShow;

    this.numberOfPxToMove = this.cartWidth + this.gapBetween;
    this.numberOfClonesToAdd = Math.ceil(numberOfCartsShow / 2) * 2;
    this.initialLandingPosition =
      (this.numberOfClonesToAdd / 2) * this.numberOfPxToMove;

    this.landingPosition = this.initialLandingPosition;

    this.maxLandingPosition =
      (this.numberOfItems + this.numberOfClonesToAdd - numberOfCartsShow) *
      this.numberOfPxToMove;

    this.minLandingPosition = 0;
    this.isTransformationAllowed = true;
  }

  carousalContent() {
    const mainCartsArr = Array.from(Array(this.numberOfItems).keys()).map(
      (number, index) => {
        return {
          itemId: index,
          isCopy: false,
          id: 0,
        };
      }
    );

    if (this.numberOfCartsShow >= this.numberOfItems) {
      return mainCartsArr;
    }

    return this.carousalCartClone(mainCartsArr);
  }

  carousalCartClone(
    mainCartsArr: Array<{ itemId: number; isCopy: boolean; id: number }>
  ) {
    const tempMainCartArr = [...mainCartsArr];
    // clones of the start of array
    for (let i = 0; i < this.numberOfClonesToAdd / 2; i++) {
      let cartObj = { itemId: this.numberOfItems - i - 1, isCopy: true, id: 0 };
      tempMainCartArr.unshift(cartObj);
    }

    // clones of the end of array
    for (let i = 0; i < this.numberOfClonesToAdd / 2; i++) {
      let cartObj = { itemId: i, isCopy: true, id: 0 };
      tempMainCartArr.push(cartObj);
    }

    const newMainCartArr = tempMainCartArr.map((cartObj, index) => {
      return { ...cartObj, id: index };
    });

    return newMainCartArr;
  }
}

export const CarousalMultiInstance = new CarousalMulti({
  carousalWrapperWidth: 0,
  numberOfItems: 0,
  gapBetween: 20,
  cartWidth: 0,
  numberOfCartsShow: 0,
  numberOfPxToMove: 0,
  numberOfClonesToAdd: 0,
  initialLandingPosition: 0,
  landingPosition: 0,
  maxLandingPosition: 0,
  minLandingPosition: 0,
  isTransformationAllowed: true,
});
