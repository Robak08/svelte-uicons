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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.98 2.023v4a1 1 0 0 1-2 0V3.46l-5.3 5.272a1 1 0 0 1-1.41-1.418l5.32-5.291h-2.61a1 1 0 0 1 0-2h4a2 2 0 0 1 2 2Zm-.905 14.739a3.1 3.1 0 0 1 0 4.378l-.912 1.05c-8.191 7.838-28.12-12.085-20.4-20.3l1.149-1a3.085 3.085 0 0 1 4.329.038c.03.031 1.883 2.439 1.883 2.439a3.1 3.1 0 0 1-.006 4.281L7.959 9.105a12.781 12.781 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.28-.006s2.409 1.853 2.44 1.883ZM21.7 18.216s-2.393-1.842-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.026-2.044 1.634-2.044 1.634a1 1 0 0 1-.979.152A15 15 0 0 1 5.88 9.318a1 1 0 0 1 .145-.995s1.607-2.017 1.634-2.044a1.1 1.1 0 0 0 0-1.549c-.03-.03-1.872-2.424-1.872-2.424a1.1 1.1 0 0 0-1.51.038l-1.149 1C-2.516 10.126 14.757 26.442 20.7 20.826l.912-1.05a1.12 1.12 0 0 0 .088-1.56Z"/></svg>
  