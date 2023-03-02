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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path fill-rule="evenodd" d="M19.886.333H3.687C.691.333 0 2.116 0 5.115l.013 14.552c0 3 .934 4 3.929 4h16.057c2.995 0 4.001-1.001 4.001-3.999V4.564C24 1.566 22.881.333 19.886.333zm-8.5 5.732h2.323c0 1.295 1.543 3.196 2.193 3.573l-2.967 5.599h-.067v-3.803a.863.863 0 0 0 .555-.811.886.886 0 0 0-.889-.863.868.868 0 0 0-.313 1.675v3.801h-.041L9.193 9.624c.543-.459 2.193-2.48 2.193-3.559zm8.315.281-6.973 12.558a.224.224 0 0 1-.302.086.216.216 0 0 1-.073-.068l-.003-.005S4.745 7.831 4.554 7.563a.923.923 0 0 1-.252-.631v-.001a.91.91 0 0 1 .907-.914c.392.001.626.242.869.655l6.46 11.662L19.314 6.13h.001a.22.22 0 0 1 .301-.085c.106.06.144.194.085.301z" clip-rule="evenodd"/></svg>
  