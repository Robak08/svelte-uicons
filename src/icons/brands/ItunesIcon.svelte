<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.301 9.164 14.301 9.164 14.301 9.164z"/><path d="M23.997 6.648c-.008-1.285-.048-2.629-.643-3.799-.73-1.434-2.129-2.414-3.701-2.697-.99-.178-2.014-.151-3.016-.151H7.365c-1.004 0-2.024-.027-3.016.151-1.578.284-2.97 1.26-3.701 2.697C.163 3.8.044 4.872.015 5.924L.003 16.491c0 1.049-.035 2.123.151 3.16.28 1.561 1.277 2.979 2.697 3.702 1.433.73 3.097.645 4.658.645h8.983c1.542 0 3.234.08 4.658-.645 1.423-.724 2.415-2.132 2.697-3.702.177-.984.151-1.995.151-2.991l-.001-10.012zm-3.129 2.956c-.034.157-.169.295-.289.392-.214.173-.432.341-.654.503l-4.198 3.05 1.603 4.935c.085.262.163.526.234.791.051.193.1.541-.142.629-.178.065-.399-.033-.547-.129-.231-.15-.458-.305-.68-.467l-4.198-3.05-4.198 3.05c-.223.162-.449.317-.68.467-.13.084-.304.171-.463.158a.279.279 0 0 1-.234-.17c-.062-.149-.033-.338.007-.489.071-.266.149-.53.234-.791l1.603-4.935-4.198-3.05a14.54 14.54 0 0 1-.654-.503c-.121-.095-.258-.236-.295-.39a.276.276 0 0 1 .089-.275c.123-.105.312-.136.468-.144.275-.015.55-.022.825-.022H9.69l1.604-4.935c.085-.262.177-.521.276-.778.056-.144.145-.317.281-.4a.276.276 0 0 1 .289 0c.138.084.225.255.281.4.099.257.191.516.276.778l1.604 4.935h5.189c.275 0 .55.007.825.022.155.008.346.04.468.144a.27.27 0 0 1 .085.274z"/></svg>
  