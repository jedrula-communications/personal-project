export default function(){
  this.transition(
    this.fromRoute('blog'),
    this.toRoute('portfolio'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
