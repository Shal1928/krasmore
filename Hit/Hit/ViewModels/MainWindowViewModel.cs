using System;
using System.Windows.Input;
using Hit.Models;
using UseAbilities.MVVM.Base;
using UseAbilities.MVVM.Command;

namespace Hit.ViewModels
{
    public class MainWindowViewModel : ViewModelBase
    {
        private DateTime _date;

        #region Properties

        private DateTime _selectedDate = DateTime.Now;
        public DateTime SelectedDate
        {
            get 
            { 
                return _selectedDate; 
            }
            set
            {
                _selectedDate = value;
                OnPropertyChanged(()=>SelectedDate);
            }
        }

        private bool _useSelectedDate;
        public bool UseSelectedDate
        {
            get
            {
                return _useSelectedDate;
            }
            set
            {
                _useSelectedDate = value;
                _date = _useSelectedDate ? SelectedDate : DateTime.Now.Date;
                OnPropertyChanged(() => UseSelectedDate);
            }
        }

        #endregion


        #region Commands Description

        private ICommand _addABBYYMailHitCommand;
        public ICommand AddABBYYMailHitCommand
        {
            get
            {
                return _addABBYYMailHitCommand ?? (_addABBYYMailHitCommand = new RelayCommand(param => OnAddABBYYMailHitCommand(), null));
            }
        }

        private ICommand _addABBYYCallHitCommand;
        public ICommand AddABBYYCallHitCommand
        {
            get
            {
                return _addABBYYCallHitCommand ?? (_addABBYYCallHitCommand = new RelayCommand(param => OnAddABBYYCallHitCommand(), null));
            }
        }

        private ICommand _addFILENETMailHitCommand;
        public ICommand AddFILENETMailHitCommand
        {
            get
            {
                return _addFILENETMailHitCommand ?? (_addFILENETMailHitCommand = new RelayCommand(param => OnAddFILENETMailHitCommand(), null));
            }
        }

        private ICommand _addFILENETCallHitCommand;
        public ICommand AddFILENETCallHitCommand
        {
            get
            {
                return _addFILENETCallHitCommand ?? (_addFILENETCallHitCommand = new RelayCommand(param => OnAddFILENETCallHitCommand(), null));
            }
        }

        private ICommand _addSAPMailHitCommand;
        public ICommand AddSAPMailHitCommand
        {
            get
            {
                return _addSAPMailHitCommand ?? (_addSAPMailHitCommand = new RelayCommand(param => OnAddSAPMailHitCommand(), null));
            }
        }

        private ICommand _addSAPCallHitCommand;
        public ICommand AddSAPCallHitCommand
        {
            get
            {
                return _addSAPCallHitCommand ?? (_addSAPCallHitCommand = new RelayCommand(param => OnAddSAPCallHitCommand(), null));
            }
        }

        private ICommand _addEnvironmentMailHitCommand;
        public ICommand AddEnvironmentMailHitCommand
        {
            get
            {
                return _addEnvironmentMailHitCommand ?? (_addEnvironmentMailHitCommand = new RelayCommand(param => OnAddEnvironmentMailHitCommand(), null));
            }
        }

        private ICommand _addEnvironmentCallHitCommand;
        public ICommand AddEnvironmentCallHitCommand
        {
            get
            {
                return _addEnvironmentCallHitCommand ?? (_addEnvironmentCallHitCommand = new RelayCommand(param => OnAddEnvironmentCallHitCommand(), null));
            }
        }

        #endregion
        

        #region Command Methods

        private void OnAddABBYYMailHitCommand()
        {
            using (var hitsEntities = new HitsEntities())
            {
                var request = Requests.CreateRequests(1, 1, 1, _date);
                hitsEntities.AddToRequests(request);

                hitsEntities.SaveChanges();
            }
        }

        private void OnAddABBYYCallHitCommand()
        {
            using (var hitsEntities = new HitsEntities())
            {
                var request = Requests.CreateRequests(1, 2, 1, _date);
                hitsEntities.AddToRequests(request);

                hitsEntities.SaveChanges();
            }
        }



        private void OnAddFILENETMailHitCommand()
        {
            using (var hitsEntities = new HitsEntities())
            {
                var request = Requests.CreateRequests(1, 1, 2, _date);
                hitsEntities.AddToRequests(request);

                hitsEntities.SaveChanges();
            }
        }

        private void OnAddFILENETCallHitCommand()
        {
            using (var hitsEntities = new HitsEntities())
            {
                var request = Requests.CreateRequests(1, 2, 2, _date);
                hitsEntities.AddToRequests(request);

                hitsEntities.SaveChanges();
            }
        }



        private void OnAddSAPMailHitCommand()
        {
            using (var hitsEntities = new HitsEntities())
            {
                var request = Requests.CreateRequests(1, 1, 3, _date);
                hitsEntities.AddToRequests(request);

                hitsEntities.SaveChanges();
            }
        }

        private void OnAddSAPCallHitCommand()
        {
            using (var hitsEntities = new HitsEntities())
            {
                var request = Requests.CreateRequests(1, 2, 3, _date);
                hitsEntities.AddToRequests(request);

                hitsEntities.SaveChanges();
            }
        }



        private void OnAddEnvironmentMailHitCommand()
        {
            using (var hitsEntities = new HitsEntities())
            {
                var request = Requests.CreateRequests(1, 1, 4, _date);
                hitsEntities.AddToRequests(request);

                hitsEntities.SaveChanges();
            }
        }

        private void OnAddEnvironmentCallHitCommand()
        {
            using (var hitsEntities = new HitsEntities())
            {
                var request = Requests.CreateRequests(1, 2, 4, _date);
                hitsEntities.AddToRequests(request);

                hitsEntities.SaveChanges();
            }
        }

        #endregion
    }
}
