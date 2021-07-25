import {LoadingDemos} from "./LoadingDemos";
import {FlippingCard} from "./FlippingCard";
import {DragWithoutSpringDemos} from "./DragWithoutSpringDemos";
import {DragWithSpringDemos} from "./DragWithReactSpringDemos";
import {DragScrollMove} from "./DragScrollMove";



interface ICard {
    title: string,
    des: string,
    component: () => JSX.Element
    componentName: string
}
let des = {
    Loading: 'Простой пример AutoAnimation. Используется useMesure которая измеряет размеры элемента. Анимация привязана к размеру родителького блока.',
    Flipping: '',
    DragWithoutSpring: 'DragWithoutSpring',
    DragWithSpring: 'DragWithSpring',
    DragScrollMove: 'DragScrollMove',
}

export const cardsArray: ICard[] = [
    {title: 'Loading', des: des.Loading, component: LoadingDemos,componentName: "LoadingDemos" },
    {title: 'Flipping', des: des.Flipping, component: FlippingCard,componentName: "FlippingCard"},
    {title: 'Drag Without Spring', des: des.DragWithoutSpring, component: DragWithoutSpringDemos,componentName: "DragWithoutSpringDemos"},
    {title: 'Drag With Spring', des: des.DragWithSpring, component: DragWithSpringDemos,componentName: "DragWithSpringDemos"},
    {title: 'Drag Scroll Move', des: des.DragScrollMove, component: DragScrollMove,componentName: "DragScrollMove"},

]


