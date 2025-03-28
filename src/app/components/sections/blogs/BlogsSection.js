import styles from "./BlogsSection.module.scss";

import BlogCard from "../../shared/blog-card/BlogCard";
import { Pagination, Stack } from "@mui/material";


const BlogsSection = () => {

    const data = [
        {
            id: 1,
            title: 'Residential Interior Designer In New York, USA',
            date: 'November 23, 2021',
            alert: 'Kitchen Design',
        },
        {
            id: 2,
            title: 'How To Choose The Best Wall Art & Decor House?',
            date: 'November 23, 2021',
            alert: 'Living Room',
        },
        {
            id: 3,
            title: 'Tips To Increase The Interior Value Of Your House',
            date: 'November 23, 2021',
            alert: 'Minimalist Interior',
        },
        {
            id: 4,
            title: 'Best Solution For Any Office & Business Interior',
            date: 'November 23, 2021',
            alert: 'Kitchen Design',
        },
        {
            id: 5,
            title: 'Get Solution For Building Construction Work',
            date: 'November 23, 2021',
            alert: 'Living Room',
        },
        {
            id: 6,
            title: 'Attain The Best Finish For The Kitchen Cabinets',
            date: 'November 23, 2021',
            alert: 'Minimalist Interior',
        },

    ]

    return (
        <section className={styles.BlogsSection}>
            <div className={styles.container}>
                <h3 className={styles.title}>Recent Blogs</h3>
                <p className={styles.subtitle}>Get updates about our latest trends and techniques used in interior design project works.</p>
                <article className={styles.BlogsContainer}>
                    {data.map((blog) => {
                        return (
                            <BlogCard
                                id={blog.id}
                                title={blog.title}
                                date={blog.date}
                                alert={blog.alert}
                                src={`/blogs/blog${blog.id}.png`}
                                key={blog.id}
                            />
                        )
                    })}
                    <Stack spacing={2}>
                        {/* <Pagination count={10} shape="rounded" /> */}
                        <Pagination
                            count={10} 
                            variant="outlined" 
                            shape="rounded" 
                            size="large"
                            sx={{
                                '.MuiPaginationItem-root': {
                                  // Изменение цвета для обычного состояния
                                  color: '#CDA274',  // цвет текста для неактивных элементов
                                  borderColor: '#292F36', // цвет границы для неактивных элементов
                                  background: '#292F36',
                                },
                                '.MuiPaginationItem-page.Mui-selected': {
                                  // Цвет для активного элемента пагинации
                                  backgroundColor: '#CDA274',  // фон активной страницы
                                  color: 'white',  // цвет текста активного элемента
                                  '&:hover': {
                                    backgroundColor: '#E99A47',  // цвет фона при наведении на активную страницу
                                  },
                                },
                                '.MuiPaginationItem-ellipsis': {
                                  // Цвет для эллипсиса (три точки)
                                  color: 'gray',
                                }
                              }} 
                            />

<Pagination
                            count={10} 
                            variant="outlined" 
                            shape="rounded" 
                            size="large"
                            sx={{
                                '.MuiPaginationItem-root': {
                                  // Изменение цвета для обычного состояния
                                  color: '#292F36',  // цвет текста для неактивных элементов
                                  borderColor: '#CDA274', // цвет границы для неактивных элементов
                                  background: '#CDA274',
                                },
                                '.MuiPaginationItem-page.Mui-selected': {
                                  // Цвет для активного элемента пагинации
                                  backgroundColor: '#292F36',  // фон активной страницы
                                  borderColor: '#292F36', // цвет границы для неактивных элементов
                                  color: 'white',  // цвет текста активного элемента
                                  '&:hover': {
                                    backgroundColor: '#292F36',  // цвет фона при наведении на активную страницу
                                  },
                                },
                                '.MuiPaginationItem-ellipsis': {
                                  // Цвет для эллипсиса (три точки)
                                  color: 'gray',
                                }
                              }} 
                            />
                    </Stack>
                </article>
            </div>
        </section>
    );
};

export default BlogsSection
