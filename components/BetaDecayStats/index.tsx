import React, { FC } from "react";
import { numberWithCommas } from "@/blockchain/ergo/wallet/utils";
import styles from "./BetaDecayStats.module.css";

interface BetaDecayStatsData {
  volume14d: number;
  fee14d: number;
  volumeTotal: number;
  feeTotal: number;
  transactionCount: number;
}

interface BetaDecayStatsProps {
  stats: {
    toProtons: BetaDecayStatsData;
    toNeutrons: BetaDecayStatsData;
  };
  isLoading: boolean;
  currentPage?: string;
}

const BetaDecayStats: FC<BetaDecayStatsProps> = ({
  stats,
  isLoading,
  currentPage,
}) => {
  // Determine which stats to show based on current page
  const isToProtons = currentPage === "TransmuteFromGold";
  const displayStats = isToProtons ? stats.toProtons : stats.toNeutrons;
  const transmuteDirection = isToProtons ? "GAU → GAUC" : "GAUC → GAU";

  if (isLoading) {
    return (
      <div className={styles.statsContainer}>
        <div className={styles.statsHeader}>
          <h3 className={styles.statsTitle}>
            Beta Decay Statistics ({transmuteDirection})
          </h3>
        </div>
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p>Loading statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsHeader}>
        <h3 className={styles.statsTitle}>
          Beta Decay Statistics ({transmuteDirection})
        </h3>
        <p className={styles.statsSubtitle}>
          14-day volume and associated fees
        </p>
      </div>

      <div className={styles.statsGrid}>
        {/* 14-Day Volume */}
        <div className={styles.statCard}>
          <div className={styles.statLabel}>14-Day Volume</div>
          <div className={styles.statValue}>
            {displayStats.volume14d > 0
              ? `${numberWithCommas(displayStats.volume14d / 1e9, 2)} ${
                  isToProtons ? "GAU" : "GAUC"
                }`
              : "No data"}
          </div>
          <div className={styles.statDescription}>
            Total tokens transmuted in the last 14 days
          </div>
        </div>

        {/* 14-Day Fees */}
        <div className={styles.statCard}>
          <div className={styles.statLabel}>14-Day Fees Collected</div>
          <div className={styles.statValue}>
            {displayStats.fee14d > 0
              ? `${numberWithCommas(displayStats.fee14d / 1e9, 4)} ERG`
              : "No data"}
          </div>
          <div className={styles.statDescription}>
            Protocol fees earned from beta decay operations
          </div>
        </div>

        {/* Transaction Count */}
        <div className={styles.statCard}>
          <div className={styles.statLabel}>14-Day Transactions</div>
          <div className={styles.statValue}>
            {displayStats.transactionCount > 0
              ? numberWithCommas(displayStats.transactionCount, 0)
              : "0"}
          </div>
          <div className={styles.statDescription}>
            Number of beta decay operations performed
          </div>
        </div>

        {/* All-Time Volume */}
        <div className={styles.statCard}>
          <div className={styles.statLabel}>All-Time Volume</div>
          <div className={styles.statValue}>
            {displayStats.volumeTotal > 0
              ? `${numberWithCommas(displayStats.volumeTotal / 1e9, 2)} ${
                  isToProtons ? "GAU" : "GAUC"
                }`
              : "No data"}
          </div>
          <div className={styles.statDescription}>
            Total historical transmutation volume
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className={styles.infoBox}>
        <svg
          className={styles.infoIcon}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <p className={styles.infoText}>
          Beta decay fees are protocol fees that go to GAUC holders. The more
          volume processed, the higher the yield for GAUC holders.
        </p>
      </div>
    </div>
  );
};

export default BetaDecayStats;
