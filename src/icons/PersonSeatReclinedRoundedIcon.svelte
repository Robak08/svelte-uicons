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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-person-seat-reclined {customClass}"><path d="M3 2.5C3 1.121 4.121 0 5.5 0S8 1.121 8 2.5 6.879 5 5.5 5 3 3.879 3 2.5ZM22 22h-1.382l-2.671-5.342A2.986 2.986 0 0 0 15.264 15H9.561a1 1 0 0 1-.97-.757L8.03 12h5.969a1 1 0 1 0 0-2H7.53l-.56-2.242a1.001 1.001 0 0 0-1.941.484l1.621 6.486a2.997 2.997 0 0 0 2.911 2.271h5.703c.381 0 .724.212.894.553l2.671 5.342a1.988 1.988 0 0 0 1.789 1.105H22a1 1 0 1 0 0-2Zm-8-3H9.646a4.987 4.987 0 0 1-4.856-3.812L2.971 7.761a1 1 0 1 0-1.942.477l1.819 7.426A6.984 6.984 0 0 0 9.647 21h4.354a1 1 0 1 0 0-2Z"/></svg>
  