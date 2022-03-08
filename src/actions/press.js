const shapesFactory = {
  getPath(x, y, strokeColor, className) {
    return [
      'path',
      {
        fill: 'none',
        d: `M${x} ${y}`,
        'class': className,
        'stroke': strokeColor,
        'stroke-width': 3,
        'stroke-linejoin': 'round',
        'stroke-linecap': 'round',
        'vector-effect': 'non-scaling-stroke',
      },
    ];
  },
};

export default function press(x, y, Dispatcher, Store) {
  switch (Store.getMode()) {

    case 'DRAW':
      Dispatcher.dispatch({
        type: 'ACTIVITY_UPDATE',
        inProgress: true,
      });
      Dispatcher.dispatch({
        type: 'ANNOTATIONS_CREATE',
        annotation: shapesFactory.getPath(x, y, Store.getColor(), Store.getClass()),
      });
      break;

    default:
      break;

  }
}
