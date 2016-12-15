export default function(){
  this.transition(
    // this.fromRoute('blog'),
    // this.toRoute('portfolio'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  // this.transition(
  //   this.fromRoute('portfolio'),
  //   this.toRoute('skills'),
  //   this.use('crossFade'),
  //   this.reverse('crossFade')
  // );
}
