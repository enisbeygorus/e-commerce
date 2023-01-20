import { IResponsiveItem } from "./types";

class CarousalMultiClass {
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
  htmlElement: HTMLElement | null;

  constructor() {
    this.carousalWrapperWidth = 0;
    this.numberOfItems = 0;
    this.gapBetween = 20;
    this.cartWidth = 0;
    this.numberOfCartsShow = 3;

    this.numberOfPxToMove = 0;
    this.numberOfClonesToAdd = 0;
    this.initialLandingPosition = 0;
    this.landingPosition = 0;
    this.maxLandingPosition = 0;
    this.minLandingPosition = 0;
    this.isTransformationAllowed = true;

    this.htmlElement = null;
  }

  init({
    numberOfItems,
    gapBetween,
    carousalWrapperWidth,
    htmlElement,
  }: Pick<
    CarousalMultiClass,
    "numberOfItems" | "gapBetween" | "carousalWrapperWidth" | "htmlElement"
  >) {
    this.numberOfItems = numberOfItems;
    this.gapBetween = gapBetween;
    this.carousalWrapperWidth = carousalWrapperWidth;

    this.htmlElement = htmlElement;

    this.cartWidth = Math.floor(
      (carousalWrapperWidth - (this.numberOfCartsShow - 1) * gapBetween) /
        this.numberOfCartsShow
    );

    this.numberOfPxToMove = this.cartWidth + this.gapBetween;
    this.numberOfClonesToAdd = Math.ceil(this.numberOfCartsShow / 2) * 2;
    this.initialLandingPosition =
      (this.numberOfClonesToAdd / 2) * this.numberOfPxToMove;

    this.landingPosition = this.initialLandingPosition;

    this.maxLandingPosition =
      (this.numberOfItems + this.numberOfClonesToAdd - this.numberOfCartsShow) *
      this.numberOfPxToMove;

    this.minLandingPosition = 0;
    this.isTransformationAllowed = true;

    this.carousalTransform();
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

  caroulsaTranformController(direction: 1 | -1) {
    if (!this.isTransformationAllowed) {
      return;
    }

    this.landingPosition += direction * this.numberOfPxToMove;

    if (this.htmlElement) {
      this.htmlElement.style.transition = "all 0.8s ease 0s";
      this.carousalTransform();
    }
    if (
      this.landingPosition === this.maxLandingPosition ||
      this.landingPosition === this.minLandingPosition
    ) {
      this.isTransformationAllowed = false;
      return;
    }
  }

  carousalTransform() {
    if (this.htmlElement) {
      this.htmlElement.style.transform =
        "translate3d(-" + this.landingPosition + "px, 0px, 0px)";
    }
  }

  carousalTransitionEndHandler() {
    this.carousalMaxAndMinLandingPositionCalculate();
    if (this.htmlElement) {
      this.htmlElement.style.transition = "";

      this.htmlElement.style.transform =
        "translate3d(-" + this.landingPosition + "px, 0px, 0px)";
      this.isTransformationAllowed = true;
    }
  }

  carousalMaxAndMinLandingPositionCalculate() {
    if (this.landingPosition === this.maxLandingPosition) {
      this.landingPosition =
        (this.numberOfCartsShow % 2) * this.numberOfPxToMove;
      return;
    }

    if (this.landingPosition === this.minLandingPosition) {
      this.landingPosition =
        this.maxLandingPosition -
        (this.numberOfCartsShow % 2) * this.numberOfPxToMove;
      return;
    }
  }

  carousalResponsive(
    windowWidth: number,
    responsive: Array<IResponsiveItem> | undefined
  ) {
    if (!responsive) return;

    const _responsive = [...responsive];
    _responsive.sort(function (a, b) {
      return a.maxWidth - b.maxWidth;
    });

    const responsiveItem = _responsive.find((responsiveItem) => {
      return responsiveItem.maxWidth > windowWidth;
    });

    if (responsiveItem) {
      this.numberOfCartsShow = responsiveItem.numberOfCartsShow;
    }
  }
}

export default CarousalMultiClass;
