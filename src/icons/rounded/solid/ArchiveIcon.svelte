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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M362.667 0H149.333C90.423 0 42.667 47.756 42.667 106.667v128h426.667v-128C469.333 47.756 421.577 0 362.667 0zm-85.334 149.333h-42.667c-11.782 0-21.333-9.551-21.333-21.333s9.551-21.333 21.333-21.333h42.667c11.782 0 21.333 9.551 21.333 21.333s-9.551 21.333-21.333 21.333zM42.667 405.333C42.667 464.244 90.423 512 149.333 512h213.333c58.91 0 106.667-47.756 106.667-106.667v-128H42.667v128zm192-42.666h42.667c11.782 0 21.333 9.551 21.333 21.333 0 11.782-9.551 21.333-21.333 21.333h-42.667c-11.782 0-21.333-9.551-21.333-21.333-.001-11.782 9.551-21.333 21.333-21.333z"/></svg>
  