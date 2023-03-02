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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 7v1H0V7c0-2.757 2.243-5 5-5h1V1a1 1 0 0 1 2 0v1h8V1a1 1 0 0 1 2 0v1h1c2.757 0 5 2.243 5 5ZM0 19v-9h23.586l-7.611 7.61c-.521.521-1.429.521-1.951 0l-.634-.635c-1.277-1.277-3.503-1.277-4.78 0l-6.262 6.262A5 5 0 0 1-.001 19Zm3-5.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 3 13.5Zm14.39 5.524c-1.276 1.277-3.502 1.277-4.78 0l-.634-.635c-.521-.521-1.43-.521-1.951 0l-5.58 5.579c.182.02.367.031.555.031h14c2.757 0 5-2.243 5-5v-6.586l-6.61 6.61Z"/></svg>
  