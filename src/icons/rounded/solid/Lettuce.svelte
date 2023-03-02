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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.769 11.514a5.191 5.191 0 0 1-1.778 5.548c0 3-2.187 6.5-2.187 6.5a1 1 0 0 1-1.8-.595V9a1 1 0 0 0-2 0v14a1 1 0 0 1-1.8.6S7 19.983 7 17a5.1 5.1 0 0 1-2-4c-.1-.9.666-1.883.013-2.672a4.5 4.5 0 0 1 2.816-7.26.668.668 0 0 0 .4-.405 4 4 0 0 1 7.542 0 .652.652 0 0 0 .421.409 4.5 4.5 0 0 1 2.795 7.256 1.273 1.273 0 0 0-.218 1.186Zm4.8-1.717a4.014 4.014 0 0 0-2.513-5.648 6.448 6.448 0 0 1-.272 7.126 6.972 6.972 0 0 1-1.834 6.658 14.3 14.3 0 0 1-1.075 3.981A4.993 4.993 0 0 0 22 17c.019-.029.295-.252.295-.252a4.977 4.977 0 0 0 1.305-5.687 1.53 1.53 0 0 1-.034-1.261ZM.4 11.061a4.977 4.977 0 0 0 1.31 5.684s.276.223.3.252a4.991 4.991 0 0 0 4.122 4.917 14.3 14.3 0 0 1-1.075-3.981 6.971 6.971 0 0 1-1.834-6.658 6.448 6.448 0 0 1-.272-7.126A4.013 4.013 0 0 0 .434 9.8 1.53 1.53 0 0 1 .4 11.061Z"/></svg>
  