import { ArrowUpRight, CheckCircle } from '@phosphor-icons/react';
import { products, productsIntro } from '@/data/products';
import { showPending } from '@/config/publishing';
import Button from '@/components/ui/Button';
import PendingTag from '@/components/ui/PendingTag';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Products.module.css';

function ProductCard({ product }) {
  const showFeatures = !product.featuresPending || showPending;

  return (
    <article className={styles.plan}>
      <header className={styles.planHeader}>
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.name}>
          {product.logo ? (
            <img src={product.logo} alt={product.name} className={styles.logo} />
          ) : (
            product.name
          )}
        </h3>
        <p className={styles.description}>{product.description}</p>
        {product.url && (
          <Button
            to={product.url}
            icon={ArrowUpRight}
            aria-label={`${productsIntro.cta}: ${product.name} (opens in a new tab)`}
          >
            {productsIntro.cta}
          </Button>
        )}
      </header>

      {showFeatures && (
        <>
          <p className={styles.includes}>
            Features
            {product.featuresPending && <PendingTag>Pending confirmation</PendingTag>}
          </p>
          <ul className={styles.features}>
            {product.features.map((feature) => (
              <li key={feature}>
                <CheckCircle size={20} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}

export default function Products() {
  const { cta: _cta, ...heading } = productsIntro;

  return (
    <section id="products" className="section">
      <SectionGlow variant="center" />
      <div className="container">
        <SectionHeading {...heading} />

        <div className={styles.plans}>
          {products.map((product) => (
            <div key={product.name} className={styles.planWrap}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
