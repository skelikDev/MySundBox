import {LoadingDemos} from "./LoadingDemos";
import {FlippingCard} from "./FlippingCard";
import {DragWithoutSpringDemos} from "./DragWithoutSpringDemos";

interface ICard {
    title: string,
    component: () => JSX.Element
}


export const cardsArray: ICard[] = [
    {title: 'Loading', component: LoadingDemos},
    {title: 'Flipping', component: FlippingCard},
    {title: 'DragWithoutSpringDemos', component: DragWithoutSpringDemos}
]