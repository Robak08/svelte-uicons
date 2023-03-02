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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1ZM2 19a1 1 0 0 1 1-1h2.065L6.559 5.306a5.027 5.027 0 0 1 1.43-2.952l1.183-1.182c1.511-1.512 4.146-1.512 5.656 0l1.183 1.182a5.021 5.021 0 0 1 1.43 2.952L18.935 18H21a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm14.921-1L15.627 7h-2.626v11h3.921ZM8.661 5h6.678a3.013 3.013 0 0 0-.742-1.232l-1.183-1.182c-.756-.756-2.072-.756-2.828 0L9.403 3.768c-.344.344-.598.77-.742 1.232ZM7.079 18H11V7H8.374L7.08 18Z"/></svg>
  