document.addEventListener("scroll", function() {
    
    const scrollTop = window.scrollY;

    
    document.body.style.backgroundColor = `rgba(${scrollTop % 255}, ${scrollTop % 255}, ${scrollTop % 255}, 0.1)`;
});
