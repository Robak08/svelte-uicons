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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 16a5.006 5.006 0 0 1-5 5c-5.073.032-6.868-6.867-2.49-9.31l1.542 4.626a1 1 0 1 0 1.9-.632l-1.545-4.624A4.974 4.974 0 0 1 24 16Zm-5.593-4.94a4.926 4.926 0 0 0-1.9.63l-.56-1.678a4.1 4.1 0 0 0-.8.786L11.7 15.4a3.99 3.99 0 0 1-1.771 1.306C8.969 22.768.117 22.166 0 16a4.992 4.992 0 0 1 6.342-4.794L6.8 10.6A1.006 1.006 0 0 0 6 9H3a1 1 0 0 1 0-2h3a2.963 2.963 0 0 1 2.822 2h5.269a6.023 6.023 0 0 1 1.2-.964l-.557-1.668A2 2 0 0 0 12.838 5H11a1 1 0 0 1 0-2h1.838a3.994 3.994 0 0 1 3.794 2.735l.524 1.572c.026-.005.051-.017.077-.022a17.005 17.005 0 0 1 2.029-.257C19.716 5.966 21.9 5.428 22 7v2c-.091 1.541-2.223 1.054-2.706.031-.479.035-1 .1-1.5.187ZM12.5 11H8.823a3.016 3.016 0 0 1-.427.8L6 15h2.5a2.01 2.01 0 0 0 1.6-.8Z"/></svg>
  