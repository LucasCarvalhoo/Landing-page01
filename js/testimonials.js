/**
 * Funcionalidade do carrossel de depoimentos
 */
class TestimonialsCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = null;
        this.dots = null;
        this.prevBtn = null;
        this.nextBtn = null;
        
        // Inicializa o carrossel quando os componentes forem carregados
        document.addEventListener('componentsLoaded', this.init.bind(this));
    }
    
    /**
     * Inicializa o carrossel
     */
    init() {
        // Seleciona os elementos do carrossel
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.testimonial-nav.prev');
        this.nextBtn = document.querySelector('.testimonial-nav.next');
        
        if (!this.slides.length) {
            console.warn('Elementos do carrossel não encontrados');
            return;
        }
        
        // Adiciona eventos aos botões
        if (this.prevBtn) this.prevBtn.addEventListener('click', this.prevSlide.bind(this));
        if (this.nextBtn) this.nextBtn.addEventListener('click', this.nextSlide.bind(this));
        
        // Adiciona eventos aos pontos
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.currentSlide = index;
                this.showSlide(this.currentSlide);
            });
        });
        
        // Inicia o carrossel
        this.showSlide(this.currentSlide);
        
        console.log('Carrossel de depoimentos inicializado');
    }
    
    /**
     * Mostra um slide específico
     * @param {number} index - Índice do slide
     */
    showSlide(index) {
        // Esconde todos os slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Desativa todos os pontos
        this.dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Mostra o slide atual
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
    }
    
    /**
     * Avança para o próximo slide
     */
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
    
    /**
     * Volta para o slide anterior
     */
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
}

// Inicializa o carrossel
const testimonialCarousel = new TestimonialsCarousel();