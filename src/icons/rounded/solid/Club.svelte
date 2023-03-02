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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.368 8.019A5.227 5.227 0 0 0 18 5.546 5.793 5.793 0 0 0 12 0a5.793 5.793 0 0 0-6 5.546 5.23 5.23 0 0 0 .632 2.473 5.994 5.994 0 0 0-.526 11.912 5.942 5.942 0 0 0 4.816-1.454C10.729 20.853 10.078 22 8 22H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-2c-2.078 0-2.729-1.147-2.922-3.523a5.943 5.943 0 0 0 4.816 1.454 5.994 5.994 0 0 0-.526-11.912ZM11.971 22l.029-.047.029.047Z"/></svg>
  