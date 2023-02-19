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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-snooze {customClass}"><path d="M2.031 21.685a.431.431 0 0 0 .434.315H10a1 1 0 1 1 0 2H2.465C1.383 24 .467 23.335.13 22.307s.009-2.107.881-2.748l7.804-5.729a.435.435 0 0 0 .164-.515.432.432 0 0 0-.434-.315H1.011a1 1 0 1 1 0-2h7.535c1.082 0 1.998.665 2.335 1.693A2.426 2.426 0 0 1 10 15.442l-7.804 5.729a.434.434 0 0 0-.164.514ZM23.002 20h-3.805l4.02-3.517c.684-.503.956-1.349.691-2.155S22.925 13 22.076 13h-4.077a1 1 0 1 0 0 2h3.88l-4.02 3.517c-.684.503-.956 1.349-.691 2.155S18.151 22 19 22h4.002a1 1 0 1 0 0-2ZM19 9a1 1 0 0 0-1-1l-4.995-.042 5.155-4.236a2.033 2.033 0 0 0 .739-2.304 2.029 2.029 0 0 0-1.957-1.419h-4.938a1 1 0 0 0 0 2l4.995.042-5.156 4.236a2.033 2.033 0 0 0-.739 2.304 2.03 2.03 0 0 0 1.957 1.418h4.938a1 1 0 0 0 1-1Z"/></svg>
  