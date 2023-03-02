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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.98 8.733a4.984 4.984 0 0 1 2.408-4.376L10.26.74A4.955 4.955 0 0 1 15.2.688l4.29 2.821a5.439 5.439 0 0 1 .852.611L1.809 14.674c-.058-.278-.1-.532-.136-.737 0 0-.692-5.167-.693-5.204Zm17.826-.245a1 1 0 0 1-1.713 1.032l-.56-.929L7.565 13.7l.461.751a1 1 0 1 1-1.7 1.047l-.5-.808-3.412 1.942a4.832 4.832 0 0 0 .257.5l.533 1.03A3.98 3.98 0 0 0 8.121 19.8l.146.241a1.987 1.987 0 1 0 3.405-2.05l-.066-.111 7.01-3.929.193.321a1.988 1.988 0 1 0 3.406-2.051l-.233-.386a3.924 3.924 0 0 0 .553-4.71L22 6.091c-.094-.155-.2-.3-.3-.443L18.272 7.6ZM23 22H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z"/></svg>
  