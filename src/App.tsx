import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { OnboardingPage } from "./components/OnboardingPage";
import { MainScreen } from "./components/MainScreen";
import { CreateBillPage } from "./components/CreateBillPage";
import { FriendsPage } from "./components/FriendsPage";
import { GroupsPage } from "./components/GroupsPage";
import { CreateGroupPage } from "./components/CreateGroupPage";
import { GroupDetailPage } from "./components/GroupDetailPage";
import { SettingsPage } from "./components/SettingsPage";
import { BillDetailsPage } from "./components/BillDetailsPage";
import { SelectMembersPage } from "./components/SelectMembersPage";
import { SplitArrangementPage } from "./components/SplitArrangementPage";
import { ReceiptCapturePage } from "./components/ReceiptCapturePage";
import { ViewBillPage } from "./components/ViewBillPage";
import { EditBillPage } from "./components/EditBillPage";
import { UserProfilePage } from "./components/UserProfilePage";
import { NotificationsPage } from "./components/NotificationsPage";
import { EditProfilePage } from "./components/EditProfilePage";
import { PaymentMethodPage } from "./components/PaymentMethodPage";
import { AddCardPage } from "./components/AddCardPage";
import { TransactionHistoryPage } from "./components/TransactionHistoryPage";
import { AchievementsPage } from "./components/AchievementsPage";

type Page =
  | "login"
  | "signup"
  | "onboarding"
  | "main"
  | "createBill"
  | "receiptCapture"
  | "billDetails"
  | "viewBill"
  | "editBill"
  | "selectMembers"
  | "splitArrangement"
  | "friends"
  | "groups"
  | "createGroup"
  | "groupDetail"
  | "settings"
  | "notifications"
  | "profile"
  | "editProfile"
  | "paymentMethods"
  | "addCard"
  | "transactionHistory"
  | "achievements";

export interface UserProfile {
  id: number;
  name: string;
  image: string;
}

export interface GroupDetail {
  id: number;
  name: string;
  emoji: string;
  color: string;
  members: number;
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>("login");
  const [selectedUserProfile, setSelectedUserProfile] = useState<UserProfile | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<GroupDetail | null>(null);

  const handleNavigate = (page: string, userProfile?: UserProfile, group?: GroupDetail) => {
    setCurrentPage(page as Page);
    if (userProfile) {
      setSelectedUserProfile(userProfile);
    } else if (page !== "profile") {
      setSelectedUserProfile(null);
    }
    if (group) {
      setSelectedGroup(group);
    } else if (page !== "groupDetail") {
      setSelectedGroup(null);
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {currentPage === "login" && <LoginPage onNavigate={handleNavigate} />}
      {currentPage === "signup" && <SignupPage onNavigate={handleNavigate} />}
      {currentPage === "onboarding" && (
        <OnboardingPage onNavigate={handleNavigate} />
      )}
      {currentPage === "main" && <MainScreen onNavigate={handleNavigate} />}
      {currentPage === "createBill" && (
        <CreateBillPage onNavigate={handleNavigate} />
      )}
      {currentPage === "receiptCapture" && (
        <ReceiptCapturePage onNavigate={handleNavigate} />
      )}
      {currentPage === "billDetails" && (
        <BillDetailsPage onNavigate={handleNavigate} />
      )}
      {currentPage === "viewBill" && (
        <ViewBillPage onNavigate={handleNavigate} />
      )}
      {currentPage === "editBill" && (
        <EditBillPage onNavigate={handleNavigate} />
      )}
      {currentPage === "selectMembers" && (
        <SelectMembersPage onNavigate={handleNavigate} />
      )}
      {currentPage === "splitArrangement" && (
        <SplitArrangementPage onNavigate={handleNavigate} />
      )}
      {currentPage === "friends" && <FriendsPage onNavigate={handleNavigate} />}
      {currentPage === "groups" && <GroupsPage onNavigate={handleNavigate} />}
      {currentPage === "createGroup" && <CreateGroupPage onNavigate={handleNavigate} />}
      {currentPage === "groupDetail" && <GroupDetailPage onNavigate={handleNavigate} group={selectedGroup} />}
      {currentPage === "settings" && (
        <SettingsPage onNavigate={handleNavigate} />
      )}
      {currentPage === "notifications" && (
        <NotificationsPage onNavigate={handleNavigate} />
      )}
      {currentPage === "profile" && (
        <UserProfilePage onNavigate={handleNavigate} userProfile={selectedUserProfile} />
      )}
      {currentPage === "editProfile" && (
        <EditProfilePage onNavigate={handleNavigate} />
      )}
      {currentPage === "paymentMethods" && (
        <PaymentMethodPage onNavigate={handleNavigate} />
      )}
      {currentPage === "addCard" && (
        <AddCardPage onNavigate={handleNavigate} />
      )}
      {currentPage === "transactionHistory" && (
        <TransactionHistoryPage onNavigate={handleNavigate} />
      )}
      {currentPage === "achievements" && (
        <AchievementsPage onNavigate={handleNavigate} />
      )}
    </div>
  );
}
